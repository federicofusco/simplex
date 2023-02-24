const HeroSearch = () => {
    return <div className="border border-gray-300 rounded-sm flex justify-center mt-8 w-full max-w-md">
        <input 
        placeholder="Click or press 'S' to search" 
        type="text" 
        className="w-full p-2 outline-none"
        />
        <button className="p-2 text-gray-400 border-l border-gray-300 hover:bg-gray-100">Search</button>
    </div>
}

export default HeroSearch;