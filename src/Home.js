import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'oijtoijiojadj[fg', author: 'Marco', id: 1 },
        { title: 'Welcome', body: 'hrth sfgh  wrthh fg', author: 'John', id: 2 },
        { title: 'Party', body: 'er6tren ertwbert', author: 'Alex', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    const [name, setName] = useState('Marco');

    useEffect(() => {
        console.log('use effect ran');
    }, [name]);

    // const onClickAgain = (name, e) => {
    //     alert('Hello ' + name);
    //     console.log(e.target);
    // }

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Marco")} title="Marco's blogs" /> */}
            {/* <button onClick={(e) => {onClickAgain("Marco", e)}}>Click Again</button> */}
            <button onClick={() => setName('Marco Yu')}>change name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;