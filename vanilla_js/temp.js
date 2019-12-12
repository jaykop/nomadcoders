// min len,
// given set,
// one possible subset
// total 
function dfs_split(len, given_list, output, all) {

    // single elements of list
    let total = {
        credit_sum: 0,
        courses: []
    }

    if (len == 0) {
        if (output.length > 0) {
            all[all.length] = output;
        }
        return;
    }

    // recursive thru
    for (var j = 0; j < given_list.length; j++) {
        fn(len - 1, given_list.slice(j + 1), output.concat([given_list[j]]), all);
    }

    return;
}

function get_subsets(given, min) {

    var all = [];
    // search subset and add to 'all' list
    for (var i = min; i < a.length; i++) {
        dfs_split(i, given, [], all);
    }
    // lastly add the original
    all.push(given);
    return all;
}

// mandatory - the list of mandatory class (already parsed)
// elective - the list of elective class (already parsed)
// min - minimum credits required (?)
// max - maximum credits required (22)
function scheduleGenerator(min, max){

    if (max > 22) {
        max = 22;
        console.log("max credits is higher than 22!");
    }

    // set of generated schedules
    let generated = [];

    // add up total sum of mandatory credits
    // let mandatory_credits = 0;
    // for (let m = 0; m < mandatory.length; m++)
        // mandatory_credits += mandatory[m].credit;

    // get new min and max of elective courses credits
    const elective_min = min - mandatory_credits;
    const elective_max = max - mandatory_credits;
    let example = [1,2,3,4,5];
    generated = get_subsets(example, elective_min);
    console.log(generated);
}

scheduleGenerator(0, 10);