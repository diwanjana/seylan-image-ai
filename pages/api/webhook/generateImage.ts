// {
//     "progress": 100,
//     "createdAt": "2023-04-04T13:07:01.927Z",
//     "buttons": [
//         "U1",
//         "U2",
//         "U3",
//         "U4",
//         "🔄",
//         "V1",
//         "V2",
//         "V3",
//         "V4"
//     ],
//     "imageUrl": "your-image-url",
//     "buttonMessageId": "OtfxNzfMIKBPVE1aP4u4",
//     "originatingMessageId": "your-message-id",
//     "content": "your-original-prompt",
//     "ref": "",
//     "responseAt": "2023-04-04T13:06:01.927Z"
// }

export default async function handler(req: { body: { userPrompt: string; }; }, res: any) {
    const userPrompt = req.body.userPrompt || '';
    console.log("data prompt :", userPrompt);

    try {
        const responseImage = await fetch('https://api.thenextleg.io/v2/message/PdYYjSxFhlEzmJBYlwdu', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.NEXT_LEG}`,
                'Content-Type': 'application/json'
            }
        });

        if (responseImage.status !== 200) {
            const error = await responseImage.json();
            throw new Error(error.message);
        }

        const imageData = await responseImage.json();
        console.log("image url : ", imageData.imageUrl);
        
        res.status(200).json({ imageUrl: imageData.imageUrl });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
}