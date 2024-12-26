const socmed = [
    { name: 'Github', link: 'https://github.com/attmhd'},
    { name: 'Linkedin', link: 'https://id.linkedin.com/in/attmhd' },
    {name: 'Email', link: 'mailto:2022610013.attan@itp.ac.id'}
]

const Footer = () => {
    return (
        <footer className="pt-14 flex flex-col items-center">
            <p className="pb-3">© 2024 Attan Muhammad. All right reserved</p>
            <div className="flex space-x-4 pb-4">
                {socmed.map((item) => (
                    <a key={item.name} href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {item.name}
                    </a>
                ))}
            </div>
        </footer>
    );
}

export default Footer;
