interface Props {
  tags: string[];
}

const TagList = ({ tags }: Props) => (
  <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wide text-[var(--muted)]">
    {tags.map(tag => (
      <span key={tag} className="border border-[var(--accent-dim)] px-2 py-1 rounded-subtle text-[var(--muted)]">
        {tag}
      </span>
    ))}
  </div>
);

export default TagList;
