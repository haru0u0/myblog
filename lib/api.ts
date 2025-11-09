import { client } from "./microcms";

// 引数は、すべてのポストの「このフィールドだけ」ほしい
export async function getAllPosts(fields: string[] = []) {
  const data = await client.get({
    endpoint: "blog",
    queries: {
      orders: "-date",
    },
  });

  const posts = data.contents;

  const result = posts.map((post: any) => {
    const filtered: any = {};
    fields.forEach((field) => {
      if (field === "tag") {
        // tagがオブジェクトならnameだけ取り出す
        filtered[field] = post[field].name;
      } else if (field === "slug") {
        filtered[field] = post.id; // microCMSのidをslugとして扱う場合
      } else if (field === "date") {
        filtered[field] = new Date(post[field]).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
          timeZone: "UTC",
        });
      } else if (post[field] !== undefined) {
        filtered[field] = post[field];
      }
    });
    return filtered;
  });

  return result;
}

// 引数は、「このslugのポストの」「このフィールドだけ」ほしい
export async function getPostBySlug(slug: string, fields: string[] = []) {
  const data = await client.get({
    endpoint: `blog/${slug}`,
  });

  const post = data;

  const result: any = {};
  fields.forEach((field) => {
    if (field === "tag") {
      // tagがオブジェクトならnameだけ取り出す
      result[field] = post[field].name;
    } else if (field === "slug") {
      result[field] = post.id; // microCMSのidをslugとして扱う場合
    } else if (field === "date") {
      result[field] = new Date(post[field]).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
      });
    } else if (post[field] !== undefined) {
      result[field] = post[field];
    }
  });

  return result;
}

export async function getAllTags() {
  const data = await client.get({
    endpoint: "tag",
  });

  const result: any[] = [];
  data.contents.forEach((e) => {
    result.push(e.name);
  });

  return result;
}

export async function getPostsByTag(tag_name: string, fields: string[] = []) {
  const tag_arr = await client.get({
    endpoint: "tag",
  });

  const target = tag_arr.contents.find((item) => item.name === tag_name);

  const data = await client.get({
    endpoint: "blog",
    queries: {
      filters: `tag[equals]${target.id}`,
      orders: "-date",
    },
  });

  const posts = data.contents;

  const result = posts.map((post: any) => {
    const filtered: any = {};
    fields.forEach((field) => {
      if (field === "tag") {
        // tagがオブジェクトならnameだけ取り出す
        filtered[field] = post[field].name;
      } else if (field === "slug") {
        filtered[field] = post.id; // microCMSのidをslugとして扱う場合
      } else if (field === "date") {
        filtered[field] = new Date(post[field]).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
          timeZone: "UTC",
        });
      } else if (post[field] !== undefined) {
        filtered[field] = post[field];
      }
    });
    return filtered;
  });

  return result;
}
