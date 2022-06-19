// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { currencyList } from './../../../../libs/utils/src/helpers/currency';

interface Account {
  accountNumber: number;
  createdAt: Date | null;
  currency: string;
  id: number;
  name: string;
}

export function Home() {
  const [modal, setModal] = useState(false);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [search, setSearch] = useState<String | null>(null);
  const [accountType, setAccountType] = useState<String | null>(null);
  const currencyFind = (val:string) => currencyList.find(e => e.value === val)

  const getData = () => {
    const params:any = {
      currency: accountType
    }
    if(Number(search)){
      params.accountNumber = search
    }else{
      params.name = search
    }
    axios.get<Account[]>('http://127.0.0.1:3333/api/account',{
      params:params
    })
    .then(({data}) => setAccounts(data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getData();
  }, [search, accountType])

  const handleForm = (e:React.FormEvent<EventTarget>) => {
    e.preventDefault();
    let target = e.target as HTMLFormElement;
    const formdata = new FormData(target);
    axios
    .post('http://127.0.0.1:3333/api/account',{
      name: formdata.get('name'),
      currency: formdata.get('currency')
    },{
      headers:{
        'Content-Type' : 'application/json'
      }
    })
    .then(e => {
      //yeni verileri çek
      getData();
      //modal'ı Kapat
      setModal(false);
    })
    .catch(err => console.log(err))
  }

  return (
    <>
    <header></header>
    <main>
      <div className="container">
        <h1>MagicHesap</h1>
        <h2>Hesap Uzmanı</h2>
        <div className="account-filt">
          <div className="search">
            Arama
            <input
            type="text"
            className='form-input'
            placeholder='Hesap No veya Hesap Adı ile arayın...'
            onChange={e => setSearch(e.target.value || null)} />
          </div>
          <div className="account-type">
            Hesap Tipi
            <select
            onChange={e => setAccountType(e.target.value || null)}
            className='form-select'>
              <option value="">Seçiniz</option>
              <option value="TRY">TRY</option>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
          <button className="btn-account" onClick={e => setModal(true)}>
            <img src="/assets/plus.png" alt="" width={20} height={20} />
            YENİ HESAP
          </button>
        </div>
        <table className="account-table">
          <thead>
          <tr>
            <th></th>
            <th>HESAP ADI</th>
            <th>PARA BİRİMİ</th>
            <th>HESAP NO</th>
          </tr>
          </thead>
          <tbody>
          {accounts.map((item:Account,index: number) => {
            let currency = currencyFind(item.currency)
            return <tr key={index}>
            <td>{currency?.sign}</td>
            <td><Link to={'/detail/'+item.id}>{item.name}</Link></td>
            <td>{currency?.label}</td>
            <td>{item.accountNumber}</td>
          </tr>
          })}
          </tbody>
        </table>
      </div>
    </main>
    <div className={`modal${modal ? ' active' : ''}`}>
      <form className="modal-body" onSubmit={handleForm}>
        <div className="close" tabIndex={0} onClick={e => setModal(false)}></div>
        <h1>Yeni Hesap Ekle</h1>
        <div className="row">

          <div className="input-group" style={{ width:'100%', marginRight:16 }}>
            <label htmlFor="">Hesap Adı</label>
            <input type="text" required name="name" className='form-input' style={{ width:'100%' }} />
          </div>
          <div className="input-group" style={{ width:'100%' }}>
            <label htmlFor="">Hesap Tipi</label>
            <select name="currency" required className='form-select' style={{ width:'100%' }}>
              <option value="">Seçiniz</option>
              <option value="TRY">TRY</option>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>

        <div style={{ marginTop:24 }}>
          <button className="btn-account" type='submit'>
            <img src="/assets/ok.png" alt="" />
            KAYDET
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default Home;
