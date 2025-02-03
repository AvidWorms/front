import React, { useEffect, useState } from 'react';
import FormSection from '../../FormPatern/FormSection';
import FormSelect from '../../Input&Select/FormSelect';
import { fetchVeiculos } from '../../../api/veiculoService';

interface SelectVeiculosProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const SelectVeiculos: React.FC<SelectVeiculosProps> = ({ formData, handleChange }) => {
    const [veiculos, setVeiculos] = useState<any[]>([]);
    
    useEffect(() => {
       fetchVeiculos().then((data) => {
            console.log('Dados do Item:', data);
            setVeiculos(data);
        } 
    );
    }, []);

    return (
        <FormSection legend = "Veiculo associado">
            <FormSelect options={[{label: "", value: "1"}, ...veiculos.map(({id, modelo, placa}) => ({label: `${modelo}-${placa}`, value:id}))]} label='Veiculos' name="veiculoId" value={formData.veiculoId} onChange={handleChange} required />
        </FormSection>
    )  
}
;