import React from 'react'

const Footer = () => {

    
    const footerLinks = (element) => {
        const allFooterLink = document.querySelectorAll(".footerLinks")
        switch (element) {
            case 0:
                allFooterLink.forEach((value,index)=>
                    index===0?(value.style.opacity=1):(value.style.opacity=0.2)
                )
                break;
                case 1:
                    allFooterLink.forEach((value,index)=>
                    index===1?(value.style.opacity=1):(value.style.opacity=0.2)
                )
                break;
                case 2:
                    allFooterLink.forEach((value,index)=>
                    index===2?(value.style.opacity=1):(value.style.opacity=0.2)
                )
                break;
                case 3:
                    allFooterLink.forEach((value,index)=>
                    index===3?(value.style.opacity=1):(value.style.opacity=0.2)
                )
                break;
                case 4:
                    allFooterLink.forEach((value,index)=>
                    index===4?(value.style.opacity=1):(value.style.opacity=0.2)
                )
                break;
                case 5:
                    allFooterLink.forEach((value,index)=>
                    index===5?(value.style.opacity=1):(value.style.opacity=0.2)
                )
                break;
                default:
                    allFooterLink.forEach(value=> value.style.opacity=1)
                break;

        }
    }

    const linksBacktoNormal=()=>{
        const allFooterLink = document.querySelectorAll(".footerLinks")
        allFooterLink.forEach(value=>value.style.opacity=1)
    }

    return (
        <>
            <footer>
                <h1>
                    Let's
                    <br />
                    #connectOncutting? 
                      </h1>
                <aside onMouseLeave={linksBacktoNormal}>
                    <a href="/" className="footerLinks" onMouseOver={() => footerLinks(0) }data-cursorpointermini={true}>Home</a>
                    <a href="/story" className="footerLinks" onMouseOver={() => footerLinks(1) }data-cursorpointermini={true}>Story</a>
                    <a href="/media" className="footerLinks" onMouseOver={() => footerLinks(2) }data-cursorpointermini={true}>Media</a>
                    <a href="/franchise" className="footerLinks" onMouseOver={() => footerLinks(3) }data-cursorpointermini={true}>Franchise</a>
                    <a href="/events" className="footerLinks" onMouseOver={() => footerLinks(4) }data-cursorpointermini={true}>Event</a>
                    <a href="/chaiwalacares" className="footerLinks" onMouseOver={() => footerLinks(5)}data-cursorpointermini={true}>Chai Wala Cares</a>
                </aside>
                <div>
                    <h5>Email</h5>
                    <a href="mailto:@infochaiwala.com">@infochaiwala.com</a>
                    <a href="mailto:franchise@infochaiwala.com">franchise@infochaiwala.com</a>
                </div>
                <div>
                    <h5>Phone</h5>
                    <a href="tel:+91242424242">+9124242424242</a>
                </div>
                <p>© COPYRIGHT 2022 MBA CHAIWALA. MADE BY <span>--- SUHAIL ---</span></p>
            </footer>
            <div className='footer'></div>
        </>
    )
}

export default Footer