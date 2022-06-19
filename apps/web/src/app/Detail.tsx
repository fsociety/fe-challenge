import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { currencyList } from './../../../../libs/utils/src/helpers/currency';

type Activity = {
  id: number;
  accountId: number;
  description: string;
  amount: number;
  type: number; // 0: Gider, 1: Gelir
  createdAt: Date;
};

type ActivityCreateInput = {
  description: string;
  amount: number;
  type: number;
  createdAt: string | Date;
  accountId: number;
};

type Account = {
  accountNumber: number;
  createdAt: Date | null;
  currency: string;
  id: number;
  name: string;
}

const flags: any = {
  TRY: '/assets/tr.png',
  USD: '/assets/us.png',
  GBP: '/assets/uk.png'
}

export function Detail() {
  const [modal, setModal] = useState(false);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [account, setAccount] = useState<Account>();
  let { id } = useParams();
  const currencyFind = (val:string) => currencyList.find(e => e.value === val)

  const getData = () => {
    axios.get<Activity[]>('http://127.0.0.1:3333/api/activity',{
      params:{
        accountId: id
      }
    })
    .then(({data}) => setActivities(data))
    .catch(err => console.log(err))

    axios.get<Account[]>('http://127.0.0.1:3333/api/account',{
      params:{id}
    })
    .then(({data}) => setAccount(data[0]))
    .catch(err => console.log(err))
  }
  useEffect(() => {
    if(id){
      getData()
    }
  }, [id])

  const handleForm = (e:React.FormEvent<EventTarget>) => {
    e.preventDefault();
    let target = e.target as HTMLFormElement;
    const formdata = new FormData(target);
    const data:ActivityCreateInput = {
      accountId: Number(id),
      description: String(formdata.get('description')),
      amount: Number(formdata.get('amount')),
      createdAt: new Date(String(formdata.get('createdAt'))),
      type: Number(formdata.get('type'))
    }
    axios
    .post('http://127.0.0.1:3333/api/activity',data,{
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
          <Link to={'/'} className="btn-account">
            <img src="/assets/left-arrow.png" alt="" width={20} height={20} />
            ANA SAYFA
          </Link>
          <button className="btn-account" onClick={e => setModal(true)}>
            <img src="/assets/plus.png" alt="" width={20} height={20} />
            YENİ HESAP HAREKETİ
          </button>
        </div>
        <div className="selected-account">
          <img src={flags[account?.currency || 0]} alt="" />
          <div className='account-info'>
            {
              account && (
                <>
                <h1>{account.name}</h1>
                <p>{account.accountNumber} - {currencyFind(account.currency)?.label} ({currencyFind(account.currency)?.sign})</p>
                </>
              )
            }
          </div>
        </div>
        <div className="activities">
          <div>
            <h1>Hesap Hareketleri</h1>
            <span>{activities?.length} Sonuç</span>
          </div>
          <div className='list'>
            {activities?.map((item: Activity,index: number) => {
              let date = new Date(item.createdAt);
              let month = date.toLocaleString('tr-TR', { month: "long" });
              return <div className="activity" key={index}>
              <div className="date">
                <strong>{date.getDate()}</strong>
                {month}
              </div>
              <div className="info">
                <div className='col-1'>
                  <h1>{item?.description}</h1>
                  <small>Market</small>
                </div>
                <div className={`col-2 ${item?.type ? 'green' : ''}`}>
                  <strong>{item?.type ? '+' : '-'}{item?.amount}</strong> ₺
                </div>
              </div>
            </div>
            })}
          </div>
        </div>
        <div className="pagination">
          <div className='prev'>
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.78 12.02L6.6 13.2L-9.53674e-07 6.6L6.6 0L7.78 1.18L2.36 6.6L7.78 12.02Z" fill="#C3C3C3"/>
            </svg>
          </div>
          <ul>
            <li className='active'> 1 </li>
            <li> 2 </li>
            <li> 3 </li>
            <li> 4 </li>
          </ul>
          <div className='next'>
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.220001 12.02L1.4 13.2L8 6.6L1.4 0L0.220001 1.18L5.64 6.6L0.220001 12.02Z" fill="#C3C3C3"/>
            </svg>
          </div>
        </div>
      </div>
    </main>

    <div className={`modal${modal ? ' active' : ''}`}>
      <form className="modal-body" onSubmit={handleForm}>
        <div className="close" tabIndex={0} onClick={e => setModal(false)}></div>
        <h1>Yeni Hesap Hareketi</h1>
        <div className="row">
          <div className="input-group">
            <label htmlFor="">Tarih</label>
            <input type="date" required name="createdAt" className='form-input' />
          </div>
          <div className="input-group">
            <label htmlFor="">Kategori</label>
            <select name="" className='form-select'>
              <option value="">Seçiniz</option>
              <option value="1">OPT2</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="">Tutar</label>
            <input type="text" className='form-input' name="amount" placeholder='Tutar' />
          </div>
        </div>
        <div className="row">
          <div className="input-group" style={{ width:'100%' }}>
            <label htmlFor="">Açıklama</label>
            <textarea name="description" className='form-textarea' placeholder='Açıklama'></textarea>
          </div>
        </div>
        <div className="title">Hareket Türü</div>
        <div className="radio-group">
          <div>
          <input type="radio" name='type' id='type' value={1} />
          <label htmlFor="gelir">GELİR</label>
          </div>
          <div>
          <input type="radio" name='type' id='type' value={0} />
          <label htmlFor="gider">GİDER</label>
          </div>
        </div>
        <div>
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

export default Detail;
