import {Client} from "pg";

// Exemple de connectionString
const connectionString = 'postgresql://neondb_owner:npg_IQdTtyF0W1wu@ep-royal-field-a2fa6wh4-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

// Création du client
const client = new Client({
    connectionString,
});

async function run() {
    try {
        // Connexion
        await client.connect();

        // Exemple de requête SELECT
        const result =  await client.query(`
SELECT *
FROM topics 
INNER JOIN devjoblist ON devjoblist.topic_id = topics.id
WHERE topics.name = '${process.argv[2]}';`);

for(const row of result.rows){
    console.log(`${row.name}: ${row.description}`)
}

        console.log("Résultats :", result.rows);
    } catch (err) {
        console.error("Erreur :", err);
    } finally {
        // Déconnexion
        await client.end();
    }
}

run();

console.log("Recherche : ", process.argv[2]);
