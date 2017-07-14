INSERT INTO locations (l_name) VALUES ('CodeClan');
INSERT INTO locations (l_name) VALUES ('CodeBase');
INSERT INTO locations (l_name) VALUES ('test');

INSERT INTO organisations (o_name) VALUES  ('CodeClan');
INSERT INTO organisations (o_name) VALUES  ('CodeBase');

INSERT INTO groups (g_name, org_id) VALUES ('Cohort 11', 1);
INSERT INTO groups (g_name, org_id) VALUES ('Cohort 12', 1);
INSERT INTO groups (g_name, org_id) VALUES ('Cohort 13', 1);



INSERT INTO players (p_name, rating, picture, primary_org_id, primary_group_id)
VALUES 
 ('Jake', 0, 'blank', 1, 1);

INSERT INTO players (p_name, rating, picture, primary_org_id, primary_group_id)
VALUES 
 ('Liz', 0, 'blank', 1, 2);

INSERT INTO players (p_name, rating, picture, primary_org_id, primary_group_id)
VALUES 
 ('Sam', 0, 'blank', 1, 1);

INSERT INTO players (p_name, rating, picture, primary_org_id, primary_group_id)
VALUES 
 ('Kim', 0, 'blank', 1, 1);

INSERT INTO players (p_name, rating, picture, primary_org_id, primary_group_id)
VALUES 
 ('Bob', 0, 'blank', 2, 1);


INSERT INTO games (p1_id, p2_id, p1_score, p2_score, location_id) 
VALUES (1, 2, 11, 7, 1);

INSERT INTO games (p1_id, p2_id, p1_score, p2_score, location_id) 
VALUES (1, 2, 10, 11, 1);

INSERT INTO games (p1_id, p2_id, p1_score, p2_score, location_id) 
VALUES (1, 3, 11, 4, 1);

INSERT INTO games (p1_id, p2_id, p1_score, p2_score, location_id) 
VALUES (4, 5, 6, 11, 2);

INSERT INTO games (p1_id, p2_id, p1_score, p2_score, location_id) 
VALUES (4, 3, 11, 9, 1);
