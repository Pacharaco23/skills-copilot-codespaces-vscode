function skillsMember() {
    const roles = ['developer', 'designer', 'analyst'];
    const randomRoleIndex = Math.floor(Math.random() * roles.length);
    const randomRole = roles[randomRoleIndex];

    switch (randomRole) {
        case 'developer':
            return 'Skills for a developer: JavaScript, Python, HTML/CSS, Git';
        case 'designer':
            return 'Skills for a designer: UI/UX design, Adobe Creative Suite, Prototyping tools';
        case 'analyst':
            return 'Skills for an analyst: Data analysis, Excel, SQL, Statistical analysis';
        default:
            return 'Skills for this member are not specified.';
    }
