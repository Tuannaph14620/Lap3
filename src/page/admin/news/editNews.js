import detail from "../../../detail";

const editNews = {
    render(id) {
        const result = detail.find((post) => post.id === id);
        return `
        <img src="${result.img}" />
            <div>${result.desc}</div>
        `;
    },
};

export default editNews;