function skillsMember(memberName) {
    const skills = {
        'John': ['JavaScript', 'HTML', 'CSS'],
        'Jane': ['Python', 'Data Analysis', 'Machine Learning'],
        'Alex': ['Java', 'Android Development', 'Kotlin']
    };

    const memberSkills = skills[memberName];
    if (memberSkills) {
        return `${memberName} tiene las siguientes habilidades: ${memberSkills.join(', ')}.`;
    } else {
        return `No se encontraron habilidades para ${memberName}.`;
    }
}