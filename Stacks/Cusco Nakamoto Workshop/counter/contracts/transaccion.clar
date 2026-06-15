(define-map transactions
  { addr: principal }
  (list 100 { tx-id: uint, amount: uint, timestamp: uint })
)

(define-public (record-transaction (addr principal) (tx-id uint) (amount uint))
  (begin
    (map-set transactions
      { addr: addr }
      (list { tx-id: tx-id, amount: amount, timestamp: block-height })
    )
    (ok "Transaction recorded")
  )
)

(define-read-only (get-transactions (addr principal))
  (map-get? transactions { addr: addr })
)
