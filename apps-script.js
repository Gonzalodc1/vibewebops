// 1. Go to script.google.com or Extensions > Apps Script in a Google Sheet
// 2. Paste this code
// 3. Change EMAIL_RECIPIENT const
// 4. Click Deploy > New Deployment > Type: Web App
// 5. Description: "Lead Form"
// 6. Execute as: "Me" (your account)
// 7. Who has access: "Anyone" (Critical for the form to work without login)
// 8. Copy the Web App URL and paste it in your .env.local as NEXT_PUBLIC_APPS_SCRIPT_URL

var EMAIL_RECIPIENT = "tuemail@dominio.com";

function doPost(e) {
    try {
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

        // Parse JSON data from request body
        var data = JSON.parse(e.postData.contents);
        var timestamp = new Date();

        // Append to Sheet (Order must match column headers if you have them)
        // Create headers in Row 1: Timestamp, Nombre, Empresa, Contacto, Servicio, Mensaje
        sheet.appendRow([
            timestamp,
            data.nombre || "",
            data.empresa || "",
            data.contacto || "",
            data.servicio || "",
            data.mensaje || ""
        ]);

        // Send Email Notification
        var subject = "🚀 Nuevo Lead Vibe Web Ops: " + data.nombre;
        var body = "Nuevo contacto recibido desde la web:\n\n" +
            "👤 Nombre: " + data.nombre + "\n" +
            "🏢 Empresa: " + data.empresa + "\n" +
            "📱 Contacto: " + data.contacto + "\n" +
            "🛠️ Servicio: " + data.servicio + "\n" +
            "📝 Mensaje: " + data.mensaje + "\n\n" +
            "📅 Fecha: " + timestamp;

        MailApp.sendEmail(EMAIL_RECIPIENT, subject, body);

        // Return Success JSON
        return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        // Return Error JSON
        return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}
