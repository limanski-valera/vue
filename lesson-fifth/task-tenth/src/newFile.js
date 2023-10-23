import persons from "@/data/persons";

export default (await import('vue')).defineComponent({
name: "App",
components: {
PersonsBoard,
},
data() {
return {
persons: persons,
pair: null,
selectedPairsList: [],
};
},
computed: {
isButtonDisabled() {
if (this.pair && this.pair.selectedMen !== null && this.pair.selectedGirl !== null) {
return false;
} else return true;
},
},
methods: {
onPairSelected(selectedPair) {
this.pair = selectedPair;
},
transferPair() {

const selectedMenIndex = this.pair.selectedMen;
const selectedGirlIndex = this.pair.selectedGirl;

const mensList = this.persons['Хлопці'];
const girlsList = this.persons['Дівчата'];
const selectedMen = mensList.splice(selectedMenIndex, 1);
const selectedGirl = girlsList.splice(selectedGirlIndex, 1);

this.selectedPairsList.push([selectedMen, selectedGirl]);
}
},
});
