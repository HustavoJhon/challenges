;; (define-public (get-balance (address principal))
  (let ((balance (contract-call? .stacks-token get-balance (as-contract address))))
    (if (is-none balance)
      (err "Account not found")
      (ok (unwrap! balance)))))

;; (d
  (address principal)
  (list (tuple (tx-id uint) (amount uint) (timestamp uint))))

(define-public (record-transaction (addr principal) (tx-id uint) (amount uint))
  (map-set transactions addr (list (tuple (tx-id tx-id) (amount amount) (timestamp (block-height)))))
  (ok "Transaction recorded"))