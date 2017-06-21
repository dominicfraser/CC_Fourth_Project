DROP TABLE IF EXISTS pl_org_join CASCADE;
DROP TABLE IF EXISTS pl_group_join CASCADE;
DROP TABLE IF EXISTS games CASCADE;
DROP FUNCTION IF EXISTS calculate_winner();
DROP FUNCTION IF EXISTS find_primaries();
DROP TABLE IF EXISTS players CASCADE;
DROP TABLE IF EXISTS groups CASCADE;
DROP TABLE IF EXISTS organisations;
DROP TABLE IF EXISTS locations;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
  id SERIAL2 PRIMARY KEY,
  u_name VARCHAR(255),
  password VARCHAR(255)
);

CREATE TABLE locations(
  id SERIAL2 PRIMARY KEY,
  l_name VARCHAR(255)
);

CREATE TABLE organisations(
  id SERIAL2 PRIMARY KEY,
  o_name VARCHAR(255)
);

CREATE TABLE groups(
  id SERIAL2 PRIMARY KEY,
  g_name VARCHAR(255),
  org_id INT4 REFERENCES organisations(id) ON DELETE CASCADE
);

CREATE TABLE players(
  id SERIAL2 PRIMARY KEY,
  p_name VARCHAR(255),
  rating INT4,
  picture VARCHAR(255),
  primary_org_id INT4 REFERENCES organisations(id) ON DELETE CASCADE,
  primary_group_id INT4 REFERENCES groups(id) ON DELETE CASCADE
);

CREATE TABLE games(
  id SERIAL2 PRIMARY KEY,
  p1_id INT4 REFERENCES players(id) ON DELETE CASCADE,
  p2_id INT4 REFERENCES players(id) ON DELETE CASCADE,
  p1_score INT4,
  p2_score INT4,
  winner_id INT4,
  loser_id INT4,
  tstamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP(2),
  p1_org_id INT4 REFERENCES organisations(id) ON DELETE CASCADE,
  p2_org_id INT4 REFERENCES organisations(id) ON DELETE CASCADE,
  p1_group_id INT4 REFERENCES groups(id) ON DELETE CASCADE,
  p2_group_id INT4 REFERENCES groups(id) ON DELETE CASCADE,
  location_id INT4 REFERENCES locations(id) ON DELETE CASCADE
);

CREATE TABLE pl_group_join(
  id SERIAL2 PRIMARY KEY,
  p_id INT4 REFERENCES players(id) ON DELETE CASCADE,
  group_id INT4 REFERENCES groups(id) ON DELETE CASCADE
);

CREATE TABLE pl_org_join(
  id SERIAL2 PRIMARY KEY,
  p_id INT4 REFERENCES players(id) ON DELETE CASCADE,
  org_id INT4 REFERENCES groups(id) ON DELETE CASCADE
);

CREATE OR REPLACE FUNCTION calculate_winner()
RETURNS TRIGGER AS $d$
BEGIN
IF NEW.p1_score > NEW.p2_score THEN
   NEW.winner_id = NEW.p1_id;
   NEW.loser_id = NEW.p2_id;
ELSIF NEW.p1_score < NEW.p2_score THEN
  NEW.winner_id = NEW.p2_id;
  NEW.loser_id = NEW.p1_id;
ELSE
 NEW.winner_id = 0;
 NEW.loser_id = 0;
END IF;
RETURN NEW;
END;
$d$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION find_primaries()
RETURNS TRIGGER AS $d$
DECLARE 
p1_found_org_id INT4 := (
  SELECT primary_org_id 
  FROM players 
  WHERE players.id = NEW.p1_id
);
p2_found_org_id INT4 := (
  SELECT primary_org_id 
  FROM players 
  WHERE players.id = NEW.p2_id
);
p1_found_group_id INT4 := (
  SELECT primary_group_id 
  FROM players 
  WHERE players.id = NEW.p1_id
);
p2_found_group_id INT4 := (
  SELECT primary_group_id 
  FROM players 
  WHERE players.id = NEW.p2_id
);

BEGIN
NEW.p1_org_id = p1_found_org_id;
NEW.p2_org_id = p2_found_org_id;
NEW.p1_group_id = p1_found_group_id;
NEW.p2_group_id = p2_found_group_id;

RETURN NEW;
END;
$d$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION add_g_o_joins()
RETURNS TRIGGER AS $d$
BEGIN

INSERT INTO pl_org_join (p_id, org_id) VALUES (NEW.id, NEW.primary_org_id);
INSERT INTO pl_group_join (p_id, group_id) VALUES (NEW.id, NEW.primary_group_id);

RETURN NULL;
END;
$d$ LANGUAGE plpgsql;


CREATE TRIGGER determine_winner 
BEFORE INSERT ON games
FOR EACH ROW 
EXECUTE PROCEDURE calculate_winner();

CREATE TRIGGER add_primaries
BEFORE INSERT ON games
FOR EACH ROW
EXECUTE PROCEDURE find_primaries();

CREATE TRIGGER add_player_joins
AFTER INSERT ON players
FOR EACH ROW
EXECUTE PROCEDURE add_g_o_joins();

CREATE VIEW get_losses AS 
SELECT players.*, count(games.loser_id) AS losses 
FROM players INNER JOIN games 
ON games.loser_id = players.id 
GROUP BY games.loser_id, players.id;

CREATE VIEW get_wins AS
SELECT players.*, count(games.winner_id) AS wins 
FROM players INNER JOIN games 
ON games.winner_id = players.id 
GROUP BY games.winner_id, players.id;