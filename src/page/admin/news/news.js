import detail from "../../../detail";

const News = {
        render() {
            return /* html */ `
        <div class="flex justify-between gap-6 pt-10">
                ${detail
        .map(
            (post) => /* html */`
                    <div class="col basis-1/3 border-2 p-4">
                        <a href="/admin/news/${post.id}/edit"><img class="w-full " src="${post.img}" alt=""></a>
                        <a href="/admin/news/${post.id}/edit">
                            <h3 class="py-2 font-bold text-red-500">${post.title}</h3>
                        </a>
                        <p>${post.desc}</p>
                    </div>
                    `,
        )
        .join("")}
                    </div>
        `;
    },
};

export default News;