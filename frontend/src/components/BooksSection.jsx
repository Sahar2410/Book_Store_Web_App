import React from 'react';

const BooksSection = ({ data }) => {
 console.log(data);
  return (
    <div className='d-flex justify-content-around align-items-center flex-wrap my-3'>
      {data &&
        data.map((item, index) => (
          <div
            
            className='m-3'
            style={{
              width: '200px',
              height: '350px',
              border: '1px solid white',
              borderRadius: '10px',
            }}
          >
            <div>
              <img
                style={{
                  width: '200px',
                  height: '210px',
                }}
                className='img-fluid'
                src={item.image}
                alt='/'
              />
            </div>
            <h6 style={{ fontSize: '15px' }} className=' px-2 m-1 text-white'>
              {item.bookname.slice(0, 25)}...
            </h6>
            <b style={{ fontSize: '20px' }} className='mb-3 px-2 text-white'>
              Rs. {item.price}
            </b>
            <div className='d-flex justify-content-around align-items-center my-2'>
              <button className='btn btn-primary'>
                UPDATE
              </button>
              <button className='btn btn-danger' >
                DELETE
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BooksSection;
