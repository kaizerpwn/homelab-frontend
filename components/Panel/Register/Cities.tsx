interface CitiesProps {
    texts: {
        name: string;
        surname: string;
        email: string;
        password: string;
        city: string;
    }
    handleChange: (e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >) => void;
}

const Cities = ({ texts, handleChange }: CitiesProps) => {
    return (
        <select
            name="city"
            value={texts.city}
            onChange={handleChange}
            className="border-gray-800/40 bg-gray-800/40 border placeholder:bg-gray-800/40 text-gray-200 text-sm rounded-r-lg block w-full p-2.5 outline-none ring-0"
        >
            <option hidden>Choose city</option>
            <option value="Sarajevo">Sarajevo</option>
            <option value="Banja Luka">Banja Luka</option>
            <option value="Tuzla">Tuzla</option>
            <option value="Zenica">Zenica</option>
            <option value="Mostar">Mostar</option>
            <option value="Istocno Sarajevo">Istočno Sarajevo</option>
            <option value="Srebrenik">Srebrenik</option>
            <option value="Bihac">Bihać</option>
            <option value="Brcko">Brčko</option>
            <option value="Bijeljina">Bijeljina</option>
            <option value="Prijedor">Prijedor</option>
            <option value="Trebinje">Trebinje</option>
            <option value="Travnik">Travnik</option>
            <option value="Kiseljak">Kiseljak</option>
            <option value="Doboj">Doboj</option>
            <option value="Cazin">Cazin</option>
            <option value="Bugojno">Bugojno</option>
            <option value="Velika Kladuša">Velika Kladuša</option>
            <option value="Visoko">Visoko</option>
            <option value="Gorazde">Goražde</option>
            <option value="Konjic">Konjic</option>
            <option value="Gracanica">Gračanica</option>
            <option value="Gradacac">Gradačac</option>
            <option value="Bosanska aKrupa">Bosanska Krupa</option>
            <option value="Mrkonjic Grad">Mrkonjić Grad</option>
            <option value="Foca">Foča</option>
            <option value="Zavidovici">Zavidovići</option>
            <option value="Zivinice">Živinice</option>
            <option value="Sanski Most">Sanski Most</option>
            <option value="Bosanska Gradiska">Bosanska Gradiška</option>
            <option value="Bileci">Bileći</option>
            <option value="Lukavac">Lukavac</option>
            <option value="Kakanj">Kakanj</option>
            <option value="Livno">Livno</option>
            <option value="Odžak">Odžak</option>
            <option value="Sipovo">Šipovo</option>
            <option value="Prozor">Prozor</option>
            <option value="Novi Travnik">Novi Travnik</option>
            <option value="Zvornik">Zvornik</option>
        </select>
    );
}

export default Cities;