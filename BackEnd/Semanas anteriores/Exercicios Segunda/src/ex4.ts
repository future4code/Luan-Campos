function age(year?: number, option?: string): void {
    const ans = { year, option}

    if (option === undefined || option.toUpperCase() === "DC"){
        ans.option = "DC"
    } else if (option.toUpperCase() === "AC"){
        ans.option = "AC"
    }
    
    console.log("Ano: " + ans.year + " " + ans.option)
}

age(1400)