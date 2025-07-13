const panels = [
    {
        title: "The Foundations, Mid-1960s",
        time: "1966",
        description: "A busy construction site in the scenic Carmel Valley landscape. Workers in hard hats erect wooden frames for a modern shopping complex amid rolling hills and oak trees. Architect Olof Dahlstrand stands foreground with blueprints, overseeing the build. The emerging structure features clean lines, flat roofs, and natural wood exteriors blending with the rural environment.",
        keyEvents: "Construction begins on the original one- and two-story center, designed by Olof Dahlstrand as a neighborhood hub for the growing community.",
        image: "images/panel1.png" // Replace with your image file
    },
    {
        title: "Grand Opening (Late 1960s)",
        time: "1967",
        description: "Vibrant opening day scene with families and locals gathering outside the completed center. Shops like a grocery store and small retailers have fresh signs; cars from the era park in the lot. Balloons and ribbons add celebration, with the valley's mountains in the background.",
        keyEvents: "The center opens as a full-fledged retail plaza, serving as a convenient stop for Carmel Valley residents with basic stores, delis, and services.",
        image: "images/panel2.png"
    },
    {
        title: "Expansion Era (1970s-1980s)",
        time: "1977-1982",
        description: "Construction crews add new wings to the existing buildings. Scaffolding and cranes dot the site, expanding the footprint. Shoppers continue daily activities in the foreground, showing the center's ongoing operation during growth.",
        keyEvents: "Additions completed to accommodate more tenants, enhancing the center's role as a community staple with increased retail space.",
        image: "images/panel3.png"
    },
    {
        title: "Steady Community Hub (1980s-2010s)",
        time: "1980s-2010s",
        description: "A montage of everyday life: Families shopping at Safeway, people dining at cafes, and locals using services like dry cleaners. The buildings show slight weathering but remain functional, with valley views and parked cars evoking a timeless rural charm.",
        keyEvents: "Decades of stable operation as a beloved local favorite, hosting anchors like Ace Hardware and evolving with minor updates to meet community needs.",
        image: "images/panel4.png"
    },
    {
        title: "Spotlight on Carmel Video – An Iconic Tenant (1985–2020s)",
        time: "1985–2020s",
        description: "Inside a cozy video rental store filled with shelves of VHS tapes evolving to DVDs over time. Customers browse under fluorescent lights, chatting with owners behind the counter about movie recommendations. Posters of classic films adorn the walls, with a nostalgic 80s vibe transitioning to modern touches.",
        keyEvents: "Carmel Video (originally Mid Valley Movies) opened in 1985 in a modest 400-square-foot space within the Mid Valley Shopping Center, founded by Peg and Bill Zuur as a family-run business. It quickly grew into a community icon, boasting a selection rivaling big chains like Blockbuster, with over thousands of titles across genres. Staff provided personalized movie suggestions, fostering a sense of connection in an era before streaming. Despite the digital shift—Netflix, Redbox, and online services decimating video stores nationwide—Carmel Video endured as one of the last holdouts, emphasizing human interaction and rare finds. Peg Zuur noted in interviews that customers valued the tactile experience of browsing and discovering hidden gems. The store expanded its space and adapted by adding new releases, but ultimately closed in recent years amid industry changes, leaving behind fond memories for locals who saw it as a cultural relic of pre-streaming entertainment.",
        image: "images/panel4-5.png"
    },
    {
        title: "Ownership Change and Planning (2019)",
        time: "2019",
        description: "A \"Sold\" sign in front of the center, with architects and new owners (The Stanley Group) discussing blueprints. Tenants look on with mixed expressions—some excited, others concerned. The buildings appear dated, hinting at needed refreshes.",
        keyEvents: "Sold to new owners who announce ambitious remodel plans, including reconfigured spaces, updated facades, and outdoor gathering areas. Historic assessments evaluate potential preservation.",
        image: "images/panel5.png"
    },
    {
        title: "Preservation Debate (2022)",
        time: "2022",
        description: "County supervisors in a meeting room, debating with split votes shown via raised hands. Outside, protesters hold signs for/against historic status; the center's facade in the background looks unchanged but under scrutiny.",
        keyEvents: "Supervisors reject historic designation on a 3-2 vote, clearing the way for modernization amid concerns over declining value without updates.",
        image: "images/panel6.png"
    },
    {
        title: "Renovation in Progress (2024-2025)",
        time: "2024-Early 2025",
        description: "Active construction: Workers paint facades, expand patios, and install modern signage. Scaffolding covers parts of the buildings, while open shops bustle. New tenants like Ad Astra bakery prepare to move in.",
        keyEvents: "Renovations begin, focusing on visibility, traffic flow, and vibrant outdoor spaces. Ad Astra bakery signs a lease, signaling fresh retail energy.",
        image: "images/panel7.png"
    },
    {
        title: "Modern Marketplace (Mid-2025 Onward)",
        time: "2025+",
        description: "The rebranded \"The Marketplace @ Carmel Valley\" shines with updated exteriors, expanded gathering areas, and lively crowds enjoying beer, wine, and shopping. Valley views frame a transformed, inviting destination.",
        keyEvents: "Full rebranding and remodel completion, turning the 50+ year-old center into a dynamic hub for daily needs, lifestyle essentials, and community events.",
        image: "images/panel8.png"
    }
];

const container = document.getElementById('storyboard-container');
let currentIndex = 0;

function renderPanel(index) {
    container.innerHTML = '';
    const panel = panels[index];
    const panelElement = document.createElement('div');
    panelElement.className = 'panel';
    panelElement.innerHTML = `
        <img src="${panel.image}" alt="${panel.title}">
        <div>
            <h2>${panel.title}</h2>
            <h3>${panel.time}</h3>
            <p>${panel.description}</p>
            <p><strong>Key Events:</strong> ${panel.keyEvents}</p>
        </div>
    `;
    container.appendChild(panelElement);
}

function updateNavigation() {
    document.getElementById('prev-btn').disabled = currentIndex === 0;
    document.getElementById('next-btn').disabled = currentIndex === panels.length - 1;
}

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        renderPanel(currentIndex);
        updateNavigation();
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentIndex < panels.length - 1) {
        currentIndex++;
        renderPanel(currentIndex);
        updateNavigation();
    }
});

// Initial render
renderPanel(0);
updateNavigation();
