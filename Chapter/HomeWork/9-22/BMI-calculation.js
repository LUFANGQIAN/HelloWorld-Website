// 提示用户输入身高（以米为单位）
var height = parseFloat(prompt("请输入身高（米）："));

// 提示用户输入体重（以千克为单位）
var weight = parseFloat(prompt("请输入体重（千克）："));

// 计算BMI
var bmi = weight / (height * height);

// 输出BMI结果到控制台
console.log("您的BMI指数为：" + bmi);

// 判断BMI范围并输出相应建议
if (bmi < 18.5) {
    console.log("您的体重过轻，请注意营养均衡。");
} else if (bmi >= 18.5 && bmi < 24.9) {
    console.log("您的体重正常，保持健康生活习惯。");
} else if (bmi >= 25 && bmi < 29.9) {
    console.log("您的体重过重，请控制饮食并增加运动。");
} else {
    console.log("您可能存在肥胖问题，请咨询医生并采取措施改善健康。");
}
