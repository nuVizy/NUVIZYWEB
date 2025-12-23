interface Props {
  tags: string[];
}

const TagList = ({ tags }: Props) => (
  <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wide text-neon-dim">
    {tags.map(tag => (
      <span key={tag} className="border border-[rgba(0,255,65,0.08)] px-2 py-1 rounded-subtle text-[var(--neon-dim)]">
        {tag}
      </span>
    ))}
  </div>
);

export default TagList;
