-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists herbs;

CREATE table herbs (
	id BIGINT GENERATED ALWAYS AS IDENTITY,
	name VARCHAR NOT NULL,
	scientific_name VARCHAR NOT NULL,
	healing_properties VARCHAR NOT NULL,
	direct_sunlight BOOLEAN NOT NULL,
	uses VARCHAR NOT NULL
);

INSERT INTO herbs (name, scientific_name, healing_properties, direct_sunlight, uses) VALUES
('Calendula', 'Calendula officinalis', 'antiseptic, detoxifying, antispasmodic', true, 'tea for internal and external ailments'),
('Chamomile', 'Matricaria chamomilla', 'aromatic, anti-inflammatory, digestive aid', false, 'hair dyes and sore skin/eczema'),
('Peppermint', 'Metha x piperita', 'invigorator, antiseptic, choleretic', true, 'tea for sore throat, cough, and cold'),
('Holy Basil', 'Ocimum tenuiflorum', 'antimicrobial, expectorant, anti-inflammatory', true, 'treating asthma and reducing fevers'),
('Hyssop', 'Hyssopus officinalis', 'relaxant, diuretic, wound-healing', true, 'stimulates mucus production and helps with dry cough'),
('English Lavender', 'Lavandula angustifolia Vera', 'antiviral, antifungal, antioxidant', true, 'effective sleep aid and cures headaches'),
('Elecampane', 'nula helenium', 'antimicrobial, diuretic, vermifuge', false, 'treats cold and cough symptoms');



