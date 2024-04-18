// let var1= investment amount
// let var2= investment period
// let var3= expected return
// let var4= inflation
function calculateSIP() {
    var SIP = 0;
    var result = {
        expected_amount: 0,
        amount_invested: 0,
        profit_earned: 0
    };
    let var1 = invstamount.value;
    let var2 = invstperiod.value;
    let var3 = expreturn.value;
    let var4 = inflation.value;

    if (inflation.value == 'no') {
        if (period_type.value == 'years') {
            if (invst_type.value == 'mon') {

                SIP = (var1 * (((1 + ((var3 / 100) / 12)) ** (var2 * 12)) - 1) * (1 + ((var3 / 100) / 12))) / ((var3 / 100) / 12);
                result.expected_amount = Math.round(SIP);
                result.amount_invested = Math.round(var1 * var2 * 12);
                result.profit_earned = Math.round(SIP - (var1 * var2 * 12));
            }
            if (invst_type.value == 'week') {
                SIP = ((var1 * 4) * (((1 + ((var3 / 100) / 12)) ** (var2 * 12)) - 1) * (1 + ((var3 / 100) / 12))) / ((var3 / 100) / 12);
                result.expected_amount = Math.round(SIP);
                result.amount_invested = Math.round((var1 * 4) * (var2 * 12));
                result.profit_earned = Math.round(SIP - ((var1 * 4) * (var2 * 12)));
            }
            if (invst_type.value == 'quat') {
                SIP = ((var1 / 4) * (((1 + ((var3 / 100) / 12)) ** (var2 * 12)) - 1) * (1 + ((var3 / 100) / 12))) / ((var3 / 100) / 12);
                result.expected_amount = Math.round(SIP);
                result.amount_invested = Math.round((var1 / 4) * (var2 * 12));
                result.profit_earned = Math.round(SIP - ((var1 / 4) * (var2 * 12)));

            }
        }
        if (period_type.value == 'months') {
            if (invst_type.value == 'mon') {

                SIP = (var1 * (((1 + ((var3 / 100) / 12)) ** ((var2 / 12) * 12)) - 1) * (1 + ((var3 / 100) / 12))) / ((var3 / 100) / 12);
                result.expected_amount = Math.round(SIP);
                result.amount_invested = Math.round(var1 * (var2 / 12) * 12);
                result.profit_earned = Math.round(SIP - (var1 * (var2 / 12) * 12));
            }
            if (invst_type.value == 'week') {
                SIP = ((var1 * 4) * (((1 + ((var3 / 100) / 12)) ** ((var2 / 12) * 12)) - 1) * (1 + ((var3 / 100) / 12))) / ((var3 / 100) / 12);
                result.expected_amount = Math.round(SIP);
                result.amount_invested = Math.round((var1 * 4) * ((var2 / 12) * 12));
                result.profit_earned = Math.round(SIP - ((var1 * 4) * ((var2 / 12) * 12)));
            }
            if (invst_type.value == 'quat') {
                SIP = ((var1 / 4) * (((1 + ((var3 / 100) / 12)) ** ((var2 / 12) * 12)) - 1) * (1 + ((var3 / 100) / 12))) / ((var3 / 100) / 12);
                result.expected_amount = Math.round(SIP);
                result.amount_invested = Math.round((var1 / 4) * ((var2 / 12) * 12));
                result.profit_earned = Math.round(SIP - ((var1 / 4) * ((var2 / 12) * 12)));

            }
        }
    }
    if (inflation.value != 'no') {
        if (period_type.value == 'years') {
            if (invst_type.value == 'mon') {

                SIP = (var1 * (((1 + ((var3 / 100) / 12)) ** (var2 * 12)) - 1) * (1 + ((var3 / 100) / 12))) / ((var3 / 100) / 12);
                result.expected_amount = Math.round(SIP);
                result.amount_invested = Math.round(var1 * var2 * 12);
                result.profit_earned = Math.round(SIP - (var1 * var2 * 12));
            }
            if (invst_type.value == 'week') {
                SIP = ((var1 * 4) * (((1 + ((var3 / 100) / 12)) ** (var2 * 12)) - 1) * (1 + ((var3 / 100) / 12))) / ((var3 / 100) / 12);
                result.expected_amount = Math.round(SIP);
                result.amount_invested = Math.round((var1 * 4) * (var2 * 12));
                result.profit_earned = Math.round(SIP - ((var1 * 4) * (var2 * 12)));
            }
            if (invst_type.value == 'quat') {
                SIP = ((var1 / 4) * (((1 + ((var3 / 100) / 12)) ** (var2 * 12)) - 1) * (1 + ((var3 / 100) / 12))) / ((var3 / 100) / 12);
                result.expected_amount = Math.round(SIP);
                result.amount_invested = Math.round((var1 / 4) * (var2 * 12));
                result.profit_earned = Math.round(SIP - ((var1 / 4) * (var2 * 12)));

            }
        }
        if (period_type.value == 'months') {
            if (invst_type.value == 'mon') {

                SIP = (var1 * (((1 + ((var3 / 100) / 12)) ** ((var2 / 12) * 12)) - 1) * (1 + ((var3 / 100) / 12))) / ((var3 / 100) / 12);
                result.expected_amount = Math.round(SIP);
                result.amount_invested = Math.round(var1 * (var2 / 12) * 12);
                result.profit_earned = Math.round(SIP - (var1 * (var2 / 12) * 12));
            }
            if (invst_type.value == 'week') {
                SIP = ((var1 * 4) * (((1 + ((var3 / 100) / 12)) ** ((var2 / 12) * 12)) - 1) * (1 + ((var3 / 100) / 12))) / ((var3 / 100) / 12);
                result.expected_amount = Math.round(SIP);
                result.amount_invested = Math.round((var1 * 4) * ((var2 / 12) * 12));
                result.profit_earned = Math.round(SIP - ((var1 * 4) * ((var2 / 12) * 12)));
            }
            if (invst_type.value == 'quat') {
                SIP = ((var1 / 4) * (((1 + ((var3 / 100) / 12)) ** ((var2 / 12) * 12)) - 1) * (1 + ((var3 / 100) / 12))) / ((var3 / 100) / 12);
                result.expected_amount = Math.round(SIP);
                result.amount_invested = Math.round((var1 / 4) * ((var2 / 12) * 12));
                result.profit_earned = Math.round(SIP - ((var1 / 4) * ((var2 / 12) * 12)));

            }
        }
    }
    return result;
}

function calculateProjectedData(var_year) {
    let var1 = invstamount.value;
    let var2 = var_year;
    let var3 = expreturn.value;
    let var4 = inflation.value;
    var proj_result = {
        expected_amount: 0,
        amount_invested: 0,
        profit_earned: 0
    }

    if (inflation.value == 'no') {
        if (period_type.value == 'years') {
            if (invst_type.value == 'mon') {

                SIP = (var1 * (((1 + ((var3 / 100) / 12)) ** (var2 * 12)) - 1) * (1 + ((var3 / 100) / 12))) / ((var3 / 100) / 12);
                result.expected_amount = Math.round(SIP);
                result.amount_invested = Math.round(var1 * var2 * 12);
                result.profit_earned = Math.round(SIP - (var1 * var2 * 12));
            }
            if (invst_type.value == 'week') {
                SIP = ((var1 * 4) * (((1 + ((var3 / 100) / 12)) ** (var2 * 12)) - 1) * (1 + ((var3 / 100) / 12))) / ((var3 / 100) / 12);
                result.expected_amount = Math.round(SIP);
                result.amount_invested = Math.round((var1 * 4) * (var2 * 12));
                result.profit_earned = Math.round(SIP - ((var1 * 4) * (var2 * 12)));
            }
            if (invst_type.value == 'quat') {
                SIP = ((var1 / 4) * (((1 + ((var3 / 100) / 12)) ** (var2 * 12)) - 1) * (1 + ((var3 / 100) / 12))) / ((var3 / 100) / 12);
                result.expected_amount = Math.round(SIP);
                result.amount_invested = Math.round((var1 / 4) * (var2 * 12));
                result.profit_earned = Math.round(SIP - ((var1 / 4) * (var2 * 12)));

            }
        }
        if (period_type.value == 'months') {
            if (invst_type.value == 'mon') {

                SIP = (var1 * (((1 + ((var3 / 100) / 12)) ** ((var2 / 12) * 12)) - 1) * (1 + ((var3 / 100) / 12))) / ((var3 / 100) / 12);
                result.expected_amount = Math.round(SIP);
                result.amount_invested = Math.round(var1 * (var2 / 12) * 12);
                result.profit_earned = Math.round(SIP - (var1 * (var2 / 12) * 12));
            }
            if (invst_type.value == 'week') {
                SIP = ((var1 * 4) * (((1 + ((var3 / 100) / 12)) ** ((var2 / 12) * 12)) - 1) * (1 + ((var3 / 100) / 12))) / ((var3 / 100) / 12);
                result.expected_amount = Math.round(SIP);
                result.amount_invested = Math.round((var1 * 4) * ((var2 / 12) * 12));
                result.profit_earned = Math.round(SIP - ((var1 * 4) * ((var2 / 12) * 12)));
            }
            if (invst_type.value == 'quat') {
                SIP = ((var1 / 4) * (((1 + ((var3 / 100) / 12)) ** ((var2 / 12) * 12)) - 1) * (1 + ((var3 / 100) / 12))) / ((var3 / 100) / 12);
                result.expected_amount = Math.round(SIP);
                result.amount_invested = Math.round((var1 / 4) * ((var2 / 12) * 12));
                result.profit_earned = Math.round(SIP - ((var1 / 4) * ((var2 / 12) * 12)));

            }
        }
    }
    if (inflation.value != 'no') {
        if (period_type.value == 'years') {
            if (invst_type.value == 'mon') {

                SIP = (var1 * (((1 + ((var3 / 100) / 12)) ** (var2 * 12)) - 1) * (1 + ((var3 / 100) / 12))) / ((var3 / 100) / 12);
                result.expected_amount = Math.round(SIP);
                result.amount_invested = Math.round(var1 * var2 * 12);
                result.profit_earned = Math.round(SIP - (var1 * var2 * 12));
            }
            if (invst_type.value == 'week') {
                SIP = ((var1 * 4) * (((1 + ((var3 / 100) / 12)) ** (var2 * 12)) - 1) * (1 + ((var3 / 100) / 12))) / ((var3 / 100) / 12);
                result.expected_amount = Math.round(SIP);
                result.amount_invested = Math.round((var1 * 4) * (var2 * 12));
                result.profit_earned = Math.round(SIP - ((var1 * 4) * (var2 * 12)));
            }
            if (invst_type.value == 'quat') {
                SIP = ((var1 / 4) * (((1 + ((var3 / 100) / 12)) ** (var2 * 12)) - 1) * (1 + ((var3 / 100) / 12))) / ((var3 / 100) / 12);
                result.expected_amount = Math.round(SIP);
                result.amount_invested = Math.round((var1 / 4) * (var2 * 12));
                result.profit_earned = Math.round(SIP - ((var1 / 4) * (var2 * 12)));

            }
        }
        if (period_type.value == 'months') {
            if (invst_type.value == 'mon') {

                SIP = (var1 * (((1 + ((var3 / 100) / 12)) ** ((var2 / 12) * 12)) - 1) * (1 + ((var3 / 100) / 12))) / ((var3 / 100) / 12);
                result.expected_amount = Math.round(SIP);
                result.amount_invested = Math.round(var1 * (var2 / 12) * 12);
                result.profit_earned = Math.round(SIP - (var1 * (var2 / 12) * 12));
            }
            if (invst_type.value == 'week') {
                SIP = ((var1 * 4) * (((1 + ((var3 / 100) / 12)) ** ((var2 / 12) * 12)) - 1) * (1 + ((var3 / 100) / 12))) / ((var3 / 100) / 12);
                result.expected_amount = Math.round(SIP);
                result.amount_invested = Math.round((var1 * 4) * ((var2 / 12) * 12));
                result.profit_earned = Math.round(SIP - ((var1 * 4) * ((var2 / 12) * 12)));
            }
            if (invst_type.value == 'quat') {
                SIP = ((var1 / 4) * (((1 + ((var3 / 100) / 12)) ** ((var2 / 12) * 12)) - 1) * (1 + ((var3 / 100) / 12))) / ((var3 / 100) / 12);
                result.expected_amount = Math.round(SIP);
                result.amount_invested = Math.round((var1 / 4) * ((var2 / 12) * 12));
                result.profit_earned = Math.round(SIP - ((var1 / 4) * ((var2 / 12) * 12)));

            }
        }
    }
    return proj_result;

}
