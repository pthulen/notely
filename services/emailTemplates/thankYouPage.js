


const thankYouPage = `
    <html>
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You! - Notely Surveys</title>
        <style>
            /* Banner */
            
            
            #banner {
                background-attachment: fixed;
                background-color: #12a03d;
                background-image: url("../../images/banner.jpg");
                background-position: center center;
                background-size: cover;
                box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25);
                min-height: 100vh;
                position: relative;
                text-align: center;
                z-index: 21;
                
            }
            #banner .content {
                    display: inline-block;
                    margin-right: 1%;
                    max-width: 95%;
                    padding: 6em;
                    position: relative;
                    text-align: right;
                    vertical-align: middle;
                    z-index: 1;
                }
    
            #banner .content header {
                display: inline-block;
                vertical-align: middle;
            }
    
                #banner .content header h2 {
                    font-size: 2.5em;
                    margin: 0;
                }
    
                #banner .content header p {
                    margin: 0.5em 0 0 0;
                    top: 0;
                }
    
            #banner .content .image {
                border-radius: 100%;
                display: inline-block;
                height: 50%;
                margin-left: 3em;
                vertical-align: middle;
                width: 50%;
            }
    
                #banner .content .image img {
                    border-radius: 100%;
                    display: block;
                    width: 100%;
                }
                @media only screen and (max-width: 450px) {
                    #banner .content .image {
                        height: 100%;
                        width: 100%;
                        margin-top: 1.5em;
                    }
                
            }
                </style>
            </head>
            <body>
                <div id="page-wrapper">
            
            
                    <!-- Banner -->
                        <section id="banner">
                            <div class="content">
                                <header>
                                    <h2>Thank you!</h2>
                                    <p>We truly appreciate you taking the time<br />
                                    to complete our survey.</p>
                                </header>
                                <span class="image"><img src="https://i.imgur.com/E0yzB6d.jpg" alt="" /></span>
                            </div>
                        </section>
    
    
        </div>
    
        
         </body>
        </html> 
`;

module.exports = thankYouPage;