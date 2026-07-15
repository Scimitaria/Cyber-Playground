import Home from "./home";

//handles navigation between pages

export default async function Page({ params }: { params: { view_type: string } }) {
    //params have to be awaited for some reason
    const p=await params;

    //select which page to view based on url
    //ex. localhost:3000/home => p.view_type = 'home'
    //also passes login status to ech page's propss
    const renderPage = () => {
        switch (`${p.view_type}`) {
            case 'home':
                return (
                  <>
                    <Home />
                  </>
                );
            {/* if url is invalid */}
            {/* this should never happen organically */}
            default:console.log(`ERROR: ${p.view_type} is not a valid page name`)
        }
    }

    return renderPage()
}