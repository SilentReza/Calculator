const calculator = new Vue({
    el: "#Calculator",
    data() {
        return {
            result: '',
        }
    },
    methods: {
        addNumber(number) {
            this.result += number;
            try {
                if (this.result.startsWith('*')) throw "error";
                if (this.result.startsWith('-')) throw "error";
                if (this.result.startsWith('+')) throw "error";
                if (this.result.startsWith('/')) throw "error";
            }
            catch (error) {
                this.result = error;
            }
        },
        showResult() {
            this.result = eval(this.result);
        },
        removeResult() {
            this.result = '';
        }
    }

})

