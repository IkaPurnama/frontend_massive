import Form from 'react-bootstrap/Form';

function Radioidentitas() {
  return (
    <Form>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="KTP"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Kartu Pelajar"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="SIM"
            name="group1"
            type={type}
            id={`inline-${type}-3`}
          />
          <Form.Check
            inline
            label="STNK"
            name="group1"
            type={type}
            id={`inline-${type}-4`}
          />
          <Form.Check
            inline
            label="Lain-lain"
            name="group1"
            type={type}
            id={`inline-${type}-5`}
          />
        </div>
        
      ))}
    </Form>
  );
}

export default Radioidentitas;