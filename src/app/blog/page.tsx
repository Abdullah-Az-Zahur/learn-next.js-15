import { Metadata } from "next";

export const metadata : Metadata = {
    title : {
        absolute: "Blog"
    }
}

const page = () => {
    return (
        <div>
            blog
        </div>
    );
};

export default page;