// CountQueuingStrategy.test("calcBMI")



QUnit.test("testing height input", function (assert) {
    const value = 89;
    heightInp(value);
    assert.equal(height, value, "height was set to value");
});

QUnit.test("testing weight input", function (assert) {
    const value = 69;
    weightInp(value);
    assert.equal(weight, value, "weight was set to value");
});

QUnit.test("Testing calc", function (assert) {
    weight = 70;
    height = 173;
    let bmiValue = calcBMI();
    assert.equal(weight , 70);
    assert.equal(height , 173);
    assert.equal(bmiValue, 23.39);
});




// QUnit.test("Recognise - 'user.name.multiple@example.com", function (assert) {
//     const actual = isEmailAddr('user.name.multiple@example.com');
//     const expected = true;
//     assert.equal(actual, expected);
// });