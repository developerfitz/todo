from sqlalchemy import Column, Integer, String, Boolean
from todo.database import Base

class Entry(Base):
    __tablename__ = "entries"
    id = Column(Integer, primary_key=True)
    title = Column(String)
    assignee = Column(String)
    order = Column(Integer)
    completed = Column(Boolean)

    def __init__(self, title=None, order=None, assignee=None):
        self.title = title
        self.assignee = assignee
        self.order = order
        self.completed = False

    def __repr__(self):
        return "<Entry: {}>".format(self.title)
