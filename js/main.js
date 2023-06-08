const $ = document.querySelector.bind(document);
class Calculator {
	sum_income = 0;
	sum_social = 0;
	sum_stamp = 0;
	sum_clean = 0;
	constructor(value, data) {
		this.value = value;
		this.data = data;
	}
	get income_func() {
		if (this.data == "registered") {
			document.getElementsByName("r").forEach((element) => {
				if (element.checked) {
					if (element.value == 1) {
						this.sum_income = Math.floor(this.value / 5);
					} else if (element.value == 2) {
						this.sum_income = Math.floor(this.value / 10);
					} else {
						this.sum_income = 5000;
					}
				}
			});
			return this.sum_income;
		} else {
			document.getElementsByName("r").forEach((element) => {
				if (element.checked) {
					if (element.value == 1) {
						this.sum_income = 5;
					} else if (element.value == 2) {
						this.sum_income = 10;
					} else {
						this.sum_income = 5000;
					}
				}
			});
		}
	}
	get social_func() {
		if (this.data == "registered") {
			return (this.sum_social = Math.floor(this.value / 20));
		} else {
			return (this.sum_social = 20);
		}
	}
	get stamp_func() {
		if (this.data == "registered") {
			if (this.value >= 1 && this.value <= 100000) {
				this.sum_stamp = 1500;
			} else if (this.value > 100000 && this.value <= 200000) {
				this.sum_stamp = 3000;
			} else if (this.value > 200000 && this.value <= 500000) {
				this.sum_stamp = 5500;
			} else if (this.value > 500000 && this.value <= 1000000) {
				this.sum_stamp = 8500;
			} else if (this.value == 0) {
				this.sum_stamp = 0;
			} else {
				this.sum_stamp = 15000;
			}
		} else {
			if (this.value >= 1 && this.value <= 88500) {
				this.sum_stamp = 1500;
			} else if (this.value > 88500 && this.value <= 182000) {
				this.sum_stamp = 3000;
			} else if (this.value > 182000 && this.value <= 464500) {
				this.sum_stamp = 5500;
			} else if (this.value > 464500 && this.value <= 936500) {
				this.sum_stamp = 8500;
			} else if (this.value == 0) {
				this.sum_stamp = 0;
			} else {
				this.sum_stamp = 15000;
			}
		}
		return this.sum_stamp;
	}

	get clean_func() {
		if (this.data == "registered") {
			return (this.sum_clean = this.value - (this.sum_income + this.sum_social + this.sum_stamp));
		} else {
			if (this.sum_income == 5 && this.sum_stamp == 1500) {
				this.sum_clean = (4 / 3) * this.value + 2000;
			} else if (this.sum_income == 10 && this.sum_stamp == 1500) {
				this.sum_clean = (20 / 17) * this.value + 30000 / 17;
			} else if (this.sum_income == 5000 && this.sum_stamp == 1500) {
				this.sum_clean = (20 / 19) * this.value + 130000 / 19;
			} else if (this.sum_income == 5 && this.sum_stamp == 3000) {
				this.sum_clean = (4 / 3) * this.value + 4000;
			} else if (this.sum_income == 10 && this.sum_stamp == 3000) {
				this.sum_clean = (20 / 17) * this.value + 60000 / 17;
			} else if (this.sum_income == 5000 && this.sum_stamp == 3000) {
				this.sum_clean = (20 / 19) * this.value + 160000 / 19;
			} else if (this.sum_income == 5 && this.sum_stamp == 5500) {
				this.sum_clean = (4 / 3) * this.value + 22000 / 3;
			} else if (this.sum_income == 10 && this.sum_stamp == 5500) {
				this.sum_clean = (20 / 17) * this.value + 110000 / 17;
			} else if (this.sum_income == 10 && this.sum_stamp == 5500) {
				this.sum_clean = (20 / 17) * this.value + 110000 / 17;
			} else if (this.sum_income == 5000 && this.sum_stamp == 5500) {
				this.sum_clean = (20 / 19) * this.value + 210000 / 19;
			} else if (this.sum_income == 5 && this.sum_stamp == 8500) {
				this.sum_clean = (4 / 3) * this.value + 34000 / 3;
			} else if (this.sum_income == 10 && this.sum_stamp == 8500) {
				this.sum_clean = (20 / 17) * this.value + 10000;
			} else if (this.sum_income == 5000 && this.sum_stamp == 8500) {
				this.sum_clean = (20 / 19) * this.value + 270000 / 19;
			} else if (this.sum_income == 5 && this.sum_stamp == 15000) {
				this.sum_clean = (4 / 3) * this.value + 20000;
			} else if (this.sum_income == 10 && this.sum_stamp == 15000) {
				this.sum_clean = (20 / 17) * this.value + 300000 / 17;
			} else if (this.sum_income == 5000 && this.sum_stamp == 15000) {
				this.sum_clean = (20 / 19) * this.value + 400000 / 19;
			}
			this.sum_clean = Math.floor(this.sum_clean);
		}
	}
	show_result() {
		this.income_func;
		this.social_func;
		this.stamp_func;
		this.clean_func;
		if (this.data == "registered") {
			$("#sum_info").innerHTML = this.value;
			$("#clean_info").innerHTML = this.sum_clean;
			$("#social_info").innerHTML = this.sum_social;
			$("#income_info").innerHTML = this.sum_income;
			$("#stamp_info").innerHTML = this.sum_stamp;

			$("#income").innerHTML = this.sum_income;
			$("#social").innerHTML = this.sum_social;
			$("#stamp").innerHTML = this.sum_stamp;
			$("#clean").innerHTML = this.sum_clean;
		} else {
			$("#sum_info").innerHTML = this.value;
			$("#clean_info").innerHTML = this.sum_clean;
			$("#social_info").innerHTML = Math.floor(this.sum_clean / this.sum_social);
			$("#stamp_info").innerHTML = this.sum_stamp;
			if (this.sum_social == 5000) {
				$("#income_info").innerHTML = 5000;
				$("#income").innerHTML = 5000;
			} else {
				$("#income_info").innerHTML = Math.floor(this.sum_clean / this.sum_income);
				$("#income").innerHTML = Math.floor(this.sum_clean / this.sum_income);
			}
			$("#social").innerHTML = Math.floor(this.sum_clean / this.sum_social);
			$("#stamp").innerHTML = this.sum_stamp;
			$("#clean").innerHTML = this.sum_clean;
		}
	}
}

$("#input").addEventListener("keyup", function () {
	let calculator = new Calculator(Math.abs(+this.value), $(".active").getAttribute("data-index"));
	calculator.show_result();
});

$("#form").addEventListener("click", function () {
	let calculator = new Calculator(Math.abs(+$("#input").value), $(".active").getAttribute("data-index"));
	calculator.show_result();
});

window.onload = () => {
	let calculator = new Calculator(Math.abs(+$("#input").value), $(".active").getAttribute("data-index"));

	calculator.show_result();
};

document.querySelectorAll(".nav_item").forEach((element) => {
	element.addEventListener("click", function () {
		document.querySelectorAll(".nav_item").forEach((element) => {
			element.setAttribute("class", "nav_item");
		});
		this.setAttribute("class", "nav_item active");
		let calculator = new Calculator(Math.abs(+$("#input").value), this.getAttribute("data-index"));
		calculator.show_result();
	});
});
