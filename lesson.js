const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    
    showAgeAndLangs: function(plan) {
        let str = `Мне ${this.age} и я владею языками: `;
        let {languages} = plan.skills;
        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

// function showExperience(plan) {
//     console.log(plan.skills.exp)
// }

// function showProgrammingLangs(plan) {
//     let str = '';
//     for (let Key in plan.skills.programmingLangs) {
//         str += `Язык: ${Key} изучен на ${plan.skills.programmingLangs[Key]} \n`
//     };
//     console.log(str);
// }

// showExperience(personalPlanPeter);
// showProgrammingLangs(personalPlanPeter);
personalPlanPeter.showAgeAndLangs(personalPlanPeter)