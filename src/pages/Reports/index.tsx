import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { getAllProsthesis, IProsthesis } from '../../services/prosthesis';
import { Container } from './styles';
import _ from 'underscore';
import createReactClass from 'create-react-class';

const newa = {
  "id": "06cbd63f-82c0-4342-aa15-dcf3836197c9",
  "isbn": "9784732381842",
  "box": 1,
  "region": null,
  "DeliveryDate": "2021-07-15T00:00:00.000Z",
  "createdAt": "2021-07-11T02:40:54.409Z",
  "updatedAt": "2021-07-11T02:40:54.409Z",
  "patient": "Lucas",
  "service": "Montagem de dentes teste",
  "lab": "Studio Dental",
  "professional": "Lucas Canto",
  "status": "send"
}

const olda = [
  {
      "id": "06cbd63f-82c0-4342-aa15-dcf3836197c9",
      "isbn": "9784732381842",
      "box": 1,
      "region": null,
      "DeliveryDate": "2021-07-15T00:00:00.000Z",
      "createdAt": "2021-07-11T02:40:54.409Z",
      "updatedAt": "2021-07-11T02:40:54.409Z",
      "patient": "Lucas",
      "service": "Montagem de dentes teste",
      "lab": "Studio Dental",
      "professional": "Lucas Canto",
      "status": "send"
  }
]

const Reports: React.FC = () => {
  const [ prosthesis, setProsthesis] = React.useState<IProsthesis[]>([])
  React.useEffect(() => {
    (async()=>{
      const prosthesisData = await getAllProsthesis();
      setProsthesis(prosthesisData.data);   
    })();
  },[])

  const newProsthesis = prosthesis.map(prosthesis => ({
      id: prosthesis.id,
      isbn: prosthesis.isbn,
      box: prosthesis.box,
      region: prosthesis.region,
      DeliveryDate: prosthesis.DeliveryDate,
      createdAt: prosthesis.createdAt,
      updatedAt: prosthesis.updatedAt,
      patient: prosthesis.patient.name,
      service: prosthesis.service.name,
      lab:prosthesis.lab.name,
      professional: prosthesis.professional.name, 
      status: prosthesis.status.name,
  }))

  type CardProps = {
    columns: {},
    rows: any[]
  }
  
  const ResponsiveTable = createReactClass<CardProps>({
    _head: function() {
      var columns = _.map(this.props.columns, function(colName, index) {
        return (
          <th key={index}>{colName}</th>
        );
      });
      return (
        <tr>{columns}</tr>
      );
    },
    
    _rows: function() {
      var _this = this;
      return _.map(_this.props.rows, function(row, index) {
        var values = _.map(_this.props.columns, function(colName, colKey) {
          return (
            <td key={colKey} data-label={colName}>{row[colKey]}</td>
          );
        })
        return (
          <tr key={index}>{values}</tr>
        );
      })
    },
    
    render: function() {
      return (
        <table className="responsive-table">
          <thead>
            {this._head()}
          </thead>
          <tbody>
            {this._rows()}
          </tbody>
        </table>
      );
    }
  });

  const cols = {
    isbn:'ISBN',
    DeliveryDate:'Envio',
    patient:'Paciente',
    professional:'Profissional',
    service:'Trabalho',
    lab:'Lab',
    status:'Status',
    box: 'Box'
  }


  return (
    <Container>
      <Link className="go-back" to="/">
        <MdArrowBack size={32} color={'#6976d9'}/>
      </Link>
      <main>

        <h1 style={{display: 'flex', justifyContent:'center', margin:'5px 0'}}>Reports</h1>

        <ResponsiveTable columns={cols} rows={newProsthesis} />
       
      </main>
    </Container>
  )
}

export default Reports;