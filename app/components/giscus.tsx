import Giscus from '@giscus/react';

const GiscusComments = () => {
  return (
        <Giscus
          id="comments"
          repo="Exonymos/Projects"
          repoId="R_kgDOJfktVA"
          category="General"
          categoryId="DIC_kwDOJfktVM4Ch7m6"
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="transparent_dark"
          lang="en"
          loading="lazy"
        />
  );
};

export default GiscusComments;