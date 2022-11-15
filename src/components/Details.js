import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useParams } from 'react-router-dom'
import Cardsdata from './CardsData'

const Details = () => {

  const [data, setData] = useState(Cardsdata);

  const { id } = useParams();

  const compare = () => {
    let comparedata = data.filter((e) => {
      return e.id == id
    });
    setData(comparedata);
  }

  useEffect(() => {
    compare();
  }, [id])

  return (
    <>
      <div className="container">
        <h2 className='text-center'>Details Page</h2>
        <section className='container'>
          <div className="iteamsdetails">
            {
              data.map((ele) => {
                return (
                  <>
                    <div className="items_img">
                      <img src={ele.imgdata} alt="connexion" />
                    </div>
                    <div className="details">
                      <Table>
                        <tr>
                          <td>
                            <strong>{ele.rname}</strong>
                            <p> <strong>Price</strong>  : {ele.price}</p>
                            <p> <strong>Description</strong>  : {ele.address}</p>
                          </td>
                          <td>
                            <p><strong>Rating :</strong> <span >{ele.rating} ★	</span></p>
                            <p><strong>Order Review :</strong> <span >{ele.somedata}	</span></p>
                          </td>
                        </tr>
                      </Table>
                    </div>
                  </>
                )
              })
            }
          </div>
        </section>
      </div>
    </>
  )
}

export default Details