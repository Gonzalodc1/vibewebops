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
    var lock = LockService.getScriptLock();
    // Wrap everything in a lock to prevent race conditions (concurrent submissions overwriting each other)
    // Wait for up to 30 seconds for other processes to finish.
    try {
        lock.waitLock(30000);
    } catch (e) {
        return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": "Server busy, try again later." }))
            .setMimeType(ContentService.MimeType.JSON);
    }

    try {
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

        // 1. Parse JSON data from request body
        // e.postData.contents is the raw string body
        var data;
        try {
            data = JSON.parse(e.postData.contents);
        } catch (parseErr) {
            // Fallback if content type was manipulated or parsing failed
            data = e.parameter;
        }

        var timestamp = new Date();

        // 2. Append to Sheet
        // Headers in Row 1: Timestamp, Nombre, Empresa, Contacto, Servicio, Mensaje
        sheet.appendRow([
            timestamp,
            data.nombre || "",
            data.empresa || "",
            data.contacto || "",
            data.servicio || "",
            data.mensaje || ""
        ]);

        // 3. Send Email Notification
        if (EMAIL_RECIPIENT && EMAIL_RECIPIENT !== "tuemail@dominio.com") {
            var subject = "🚀 Nuevo Lead Vibe Web Ops: " + (data.nombre || "Sin nombre");
            var body = "Nuevo contacto recibido desde la web:\n\n" +
                "👤 Nombre: " + (data.nombre || "-") + "\n" +
                "🏢 Empresa: " + (data.empresa || "-") + "\n" +
                "📱 Contacto: " + (data.contacto || "-") + "\n" +
                "🛠️ Servicio: " + (data.servicio || "-") + "\n" +
                "📝 Mensaje: " + (data.mensaje || "-") + "\n\n" +
                "📅 Fecha: " + timestamp;

            MailApp.sendEmail(EMAIL_RECIPIENT, subject, body);
        }

        // Return Success JSON
        return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        // Return Error JSON
        return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    } finally {
        // Always release the lock
        lock.releaseLock();
    }
}
