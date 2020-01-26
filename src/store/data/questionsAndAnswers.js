const questionsAndAnswers = [
    {id: "0", step: "1", type: "text", slug: "forename", question: "What's your name?", answer: ""},
    {id: "1", step: "1", type: "text", slug: "surname", question: "What's your surname?", answer: ""},
    {id: "2", step: "1", type: "text", slug: "date_of_birth", question: "What's your date of birth?", answer: "1960, 01, 01"},
    {id: "3", step: "1", type: "text", slug: "age", question: "What's your age?", answer: ""},
    {id: "4", step: "1", type: "text", slug: "street", question: "What street do you live on?", answer: ""},
    {id: "5", step: "1", type: "text", slug: "town", question: "What town do you live in?", answer: ""},
    {id: "6", step: "1", type: "text", slug: "postcode", question: "What's your postcode?", answer: ""},
    {id: "7", step: "1", type: "text", slug: "phone", question: "What's your phone number?", answer: ""},
    {id: "8", step: "1", type: "text", slug: "mobile", question: "What's your mobile number?", answer: ""},
    {id: "9", step: "1", type: "text", slug: "email", question: "What's your email address?", answer: ""},
    
    {id: "10", step: "2", type: "text", slug: "gp_name", question: "What's your GP's name?", answer: ""},
    {id: "11", step: "2", type: "text", slug: "gp_email", question: "What's your GP's email?", answer: ""},
    {id: "12", step: "2", type: "text", slug: "gp_address", question: "What's your GP's address?", answer: ""},
    
    {id: "13", step: "3", type: "checkbox", slug: "hair_loss", question: "Have you ever suffered from hair loss?:", answer: "No"},
    {id: "14", step: "3", type: "checkbox", slug: "alopecia", question: "Have you ever been diagnosed from alopecia?", answer: "No"},
    {id: "15", step: "3", type: "checkbox", slug: "medication", question: "Do you take any medication?", answer: "No"},
    {id: "16", step: "3", type: "checkbox", slug: "pregnant", question: "Have you been pregnant in the last 6 months?", answer: "No"},
    {id: "17", step: "3", type: "checkbox", slug: "psoriasis", question: "Do you suffer from psoriasis to the scalp?", answer: "No"},
    {id: "18", step: "3", type: "checkbox", slug: "sensitive_scalp", question: "Do you have sensitive scalp?", answer: "No"},
    {id: "19", step: "3", type: "checkbox", slug: "allergies", question: "Do you have any known allergies?", answer: "No"},
    {id: "20", step: "3", type: "checkbox", slug: "exercise", question: "Do you frequently swim or go to the gym?", answer: "No"},
    {id: "21", step: "3", type: "checkbox", slug: "holidays", question: "Do you have upcoming holidays booked?", answer: "No"},

    {id: "22", step: "4", type: "checkbox", slug: "hair_colour", question: "Do you have currently colour your hair?", answer: "No"},
    {id: "23", step: "4", type: "text", slug: "how_often_hair_coloring", question: "If yes, how often?", answer: ""},
    {id: "24", step: "4", type: "checkbox", slug: "extensions", question: "Have you used hair extensions before?", answer: "No"},
    {id: "25", step: "4", type: "text", slug: "extensions_method", question: "If yes, which method?", answer: ""},
    {id: "26", step: "4", type: "radio", slug: "hair_type", question: "How will you describe your hair type?", options: ['Fine', "Medium", "Thick", "Very Thick"], answer: "No"},
    {id: "27", step: "4", type: "radio", slug: "hair_texture", question: "My hair texture is", options: ["Curly", "Wavy", "Straight", "Frizzy"], answer: "No"},
    {id: "28", step: "4", type: "radio", slug: "hair_length", question: "My hair length is:", options: ["Above the Shoulder", "Below the Shoulder"], answer: "No"},
    
    {id: "29", step: "5", type: "text", slug: "date", question: "Treatment Date", answer: ""},
    {id: "30", step: "5", type: "text", slug: "treatment_details", question: "Details of Treatment", answer: ""},
    {id: "31", step: "5", type: "text", slug: "comments", question: "Comments", answer: ""},
    {id: "32", step: "5", type: "text", slug: "charge", question: "Charge", answer: ""},
    {id: "33", step: "5", type: "text", slug: "signature", question: "Signature", answer: ""},

    {id: "34", step: "6", type: "radio", slug: "hair_condition", question: "My current hair condition", options: ["Dry", "Greasy", "Normal", "Chemically damaged", "Heat damaged", "Other"], answer: "No"},
    {id: "35", step: "6", type: "radio", slug: "scalp_condition", question: "My scalp condition is", options: ["Dandruff", "Oily", "Dry", "Normal"], answer: "No"},
    {id: "36", step: "6", type: "radio", slug: "diagnostic", question: "Diagnostics Test", options: ["Skin", "Elasticity", "Strand test", "Pre-perm test curl", "Colour test", "Incompatibility"], answer: "No"},
    {id: "37", step: "6", type: "radio", slug: "growth_pattern", question: "Growth Pattern", options: ["Nape Whorls", "Widow's Cowlick", "Double Crown", "Receding Hairline"], answer: "No"},

    {id: "38", step: "7", type: "textarea", slug: "notes", question: "Notes", answer: ""},
    {id: "39", step: "7", type: "text", slug: "customer_signature", question: "Customer Signature", answer: ""},
    {id: "40", step: "7", type: "text", slug: "signature_date", question: "Signature Date", answer: ""},
    {id: "41", step: "end", type: "checkbox", slug: "agree_terms", question: "Accept Terms & Privacy Policy", answer: "No", html: '<a href="#" target="_blank">Read Terms & Policy</a>'},
]


export default questionsAndAnswers
