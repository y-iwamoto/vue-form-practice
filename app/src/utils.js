export const YmdMixin =  {
    created(){
        this.setYear();
        this.setMonth();
        this.setDate();

    },
    methods:{
        setYear() {
            const convertJPYear = (year) => {
                const date = new Date(year, 4, 1, 0, 0, 0);
                return new Intl.DateTimeFormat('ja-JP-u-ca-japanese', {era: 'long',year: 'numeric'}).format(date);
            }
            this.yearOptions = [...Array(100)].map((_, i) => (
                {
                    label: `${i + 1922}年(${convertJPYear(i + 1922)})`,
                    value: `${i + 1922}`
                }
            ))
        },
        setMonth() {
            this.monthOptions = [...Array(12)].map((_, i) => (
                {
                    label: i + 1,
                    value: `${i + 1}`
                }
            ))
        },
        setDate() {
            this.dateOptions = [...Array(31)].map((_, i) => (
                {
                    label: i + 1,
                    value: i + 1
                }
            ))
        }
    }
}