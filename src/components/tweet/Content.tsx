import React from 'react';
import TweetConfig from '../../types/TweetConfig';
import useText from '../../hooks/useText';
import ImagesContainer from './ImagesContainer';

function Content({ config }: { config: TweetConfig }) {
  const text = useText(config.text);

  return (
    <div className="tweet-content">
      {text && <div className="txt">{text.replace(/(?:\r\n|\r|\n)/g, '<br />')}</div>}
      <ImagesContainer config={config} />
    </div>
  );
}

export default Content;
