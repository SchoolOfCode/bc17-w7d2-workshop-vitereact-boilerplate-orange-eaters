import './Footer.css';

const footerArray = [
    'Facebook',
    'Instagram',
    'TikTok'
        ];

  export default function Footerlist() {
  const listItems = footerArray.map(social =>
     <li>{social}</li>
    );
    return <> 
        <footer className="site-footer">
        <div className="find-us-on">
                <p> Find us on:</p>
                <ul>{listItems}</ul>
            </div>

          <div className="info">
         <p>© Fireplace Palace <br/><u>info@firepalace.co.uk</u></p>
         </div>
         </footer> 
    </>
  }
  


