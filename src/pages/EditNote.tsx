import { NoteForm } from "../components/NoteForm";
import { useNote } from "../hooks/useNote";
import { EditNoteProps } from "../types";

export function EditNote({ onSubmit, onAddTag, availableTags }: EditNoteProps) {
  const note = useNote();

  return (
    <>
      <h1 className="mb-4">Edit note</h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={(data) => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
}
