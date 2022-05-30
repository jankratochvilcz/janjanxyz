import { InferGetStaticPropsType, NextPage } from "next";
import fs from "fs"
import Head from "next/head";
import { PageRoot } from "../components/page_root";
import { getPosts, serialize, deserialize, projectsFolder } from "../services/posts";
import PostList from "../components/post_list";
import { toStaticProps } from "../utils/staticPropHelpers";

type ProjectProps = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = () => {
    const posts = getPosts(projectsFolder, fs.readdirSync, fs.readFileSync);

    return toStaticProps({posts: posts.map(serialize)});
};

const Projects: NextPage<ProjectProps> = ({ posts }: ProjectProps) => (
    <PageRoot>
        <Head>
            <title>Jan Kratochvil | Projects</title>
        </Head>
        <PostList posts={posts.map(deserialize)} />
    </PageRoot>
);

export default Projects;
