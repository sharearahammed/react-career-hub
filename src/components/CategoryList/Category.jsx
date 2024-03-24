
const Category = ({categories}) => {
    const {logo,category_name,availability} = categories;
  return (
    <div className="bg-slate-100 border border-b-slate-100 rounded-lg p-5 card-compact w-96">
      <div >
      <figure>
        <img className="h-[60px] w-[60px]"
          src={logo}
          alt="Shoes"
        />
      </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title text-[#474747]">{category_name}</h2>
        <p className="text-[#A3A3A3]">{availability}</p>
        
      </div>
    </div>
  );
};

export default Category;
