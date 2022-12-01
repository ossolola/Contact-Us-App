exports.eMessage = async (name, email, subject, message) => {
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>

            <h2>Somebody wants to get in touch with you</h2>

                    <div>

                        <p> Name: ${name} </p> 
                        <p> Email: ${email} </p>
                        <p> Subject: ${subject} </p>
                        <p> Message: ${message} </p>

                    </div>
            
        </body>
        </html>
    `

    return html;
}