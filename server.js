const express= require('express')
const cors=require('cors')
const app=express()

const port=process.env.PORT || 5000

app.use(cors());

// Color database
const colorDatabase = {
    red: ["#FF0000", "#FF5733", "#c21919", "#FF6347", "#FF4500"],
    green: ["#00FF00", "#33FF73", "#C3FF00", "#228B22", "#008000"],
    blue: ["#0000FF", "#3373FF", "#00C3FF", "#1E90FF", "#4169E1"],
    // ... (all other colors from your mapping)
};

// New feature: Popular color palettes
const popularPalettes = [
    {
        name: "Sunset",
        colors: ["#FF7E5F", "#FEB47B", "#FF6B6B", "#FFA3A3", "#FFD3B6"]
    },
    {
        name: "Ocean",
        colors: ["#0077BE", "#00A8E8", "#89CFF0", "#B0E0E6", "#ADD8E6"]
    },
    // Add more palettes
];

// Endpoint to get colors by name
app.get('/api/colors/:name', (req, res) => {
    const colorName = req.params.name.toLowerCase();
    if (colorDatabase[colorName]) {
        res.json(colorDatabase[colorName]);
    } else {
        res.status(404).json({ error: 'Color not found' });
    }
});

// Endpoint to generate random palette
app.get('/api/palette/random', (req, res) => {
    const maxColorBoxes = 21;
    const colorList = [];

    for (let i = 0; i < maxColorBoxes; i++) {
        const randomHexColor = `#${Math.floor(Math.random() * 0xffffff)
            .toString(16)
            .padStart(6, "0")}`;
        colorList.push(randomHexColor);
    }

    res.json(colorList);
});

// Endpoint to get popular palettes
app.get('/api/palettes/popular', (req, res) => {
    res.json(popularPalettes);
});


app.get('/',(req,res)=>{
    res.send("Hello from NodeJS API")
})

app.listen(port,()=>{
    console.log(`Server started on Port: ${port}`)
})