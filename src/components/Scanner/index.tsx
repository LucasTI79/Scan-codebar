import React from 'react'
// @ts-ignore
import Quagga from 'quagga';
import { validateIsbn } from '../../utils/validateIsbn';
import { Video, Container, ScanMarker } from './styles'
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
interface ScannerProps {
  onScan: (isbn: string) => void
}

const Scanner: React.FC<ScannerProps> = ({ onScan }) => {
  let scannerAttemps = 0;
  
  React.useEffect(() => {
    if(navigator.mediaDevices){
      Quagga.init({
        inputStream : {
          name : "Live",
          type : "LiveStream",
          target: document.getElementById('video'),
          facingMode: {
            exact: 'environment'
          }
        },
        numOfWorkers: 1,
        locate: true,
        decoder : {
          readers : ["ean_reader","code_128_reader"]
        }
      }, (err: any) => {
          if (err) {
              console.error(err);
              alert('Erro ao abrir a camera do dispositivo, por favor, dê a permissão de uso')
              return
          }
          Quagga.start();
        },
        Quagga.onDetected(onDetect)
      )
    }
  },[])

  const onDetect = (result: any) => {
    Quagga.offDetected(onDetect);

    let isbn = result.codeResult.code as string

    if(validateIsbn(isbn)){
      alert(`ISBN VALID ${isbn}`)
      onScan(isbn);
      return
    }else{
      if(scannerAttemps >= 5){
        alert('Não foi possível ler o código, tente novamente')
      }
    }

    scannerAttemps++;
    Quagga.onDetected(onDetect)
    
  }
  return( 
    <div>
      <Video id="video" />
      <Container>

        <Link className="go-back" to="/">
          <MdArrowBack size={32} color={'#6976d9'}/>
        </Link>

        <ScanMarker>
          {/* <img
            src='../../assets/fullScreen.svg'
            alt="Marca para leitura do código"
            width="600"
            height="600"
            /> */}
            <p className="label">Aponte para o código de barras do livro</p>
            
        </ScanMarker>

      </Container>
    </div>
  )
}

export default Scanner;