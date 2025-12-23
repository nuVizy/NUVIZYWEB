interface Props {
  tags: string[];
}

const TagList = ({ tags }: Props) => (
  <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wide text-slate">
    {tags.map(tag => (
      <span key={tag} className="border border-slate/30 px-2 py-1 rounded-subtle">
        {tag}
      </span>
    ))}
  </div>
);

export default TagList;
